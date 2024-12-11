import type { Request, Response } from 'express'
import type { RouterContext } from 'koa-router'
import type { Context } from '@midwayjs/koa'
import type { ICookies, SetOption } from 'cookies'
import type { FastifyReply, FastifyRequest } from 'fastify'

export interface ExpressContext {
  request: Request
  response: Response
}

export interface FastifyContext {
  request: FastifyRequest & {
    query: Request['query']
    path: undefined
  }
  response: FastifyReply & {
    setHeader: undefined
  }
}

// compatible with egg types
type IKoaContext = Omit<RouterContext, 'cookies' |'router'| '_matchedRoute'| '_matchedRouteName'> & {
  cookies: Omit<Partial<ICookies>, 'set'> & {
    set?: (name: string, value?: string | null, opts?: SetOption) => IKoaContext['cookies']
  }
}

export type ISSRNestContext<T={}> = ExpressContext & T
export type ISSRFastifyContext<T={}> = FastifyContext & T
export type ISSRMidwayContext<T={}> = IKoaContext & T
export type ISSRMidwayKoaContext<T={}> = Context & T // for midway3.0
export type ISSRContext<T={}> = ISSRMidwayKoaContext<T>|ISSRNestContext<T>|ISSRMidwayContext<T>|ISSRFastifyContext<T>

export interface Options {
  mode?: string
}
export interface IWindow {
  __USE_SSR__?: boolean
  __INITIAL_DATA__?: Record<string, unknown>
  __INITIAL_STATE__?: Record<string, unknown>
  __REDUX_DEVTOOLS_EXTENSION__?: unknown
  STORE_CONTEXT?: Record<string, unknown>
  __USE_VITE__?: boolean
  prefix?: string
  clientPrefix?: string
  microApp?: Record<string, unknown>
  hashRouter: boolean
  ssrDevInfo: {
    manifest: Record<string, string>
    rootId: string
    fePort?: number
    https?: boolean
  }
}

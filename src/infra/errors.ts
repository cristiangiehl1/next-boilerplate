export type AppErrorName =
  | 'BasicError'
  | 'InternalServerError'
  | 'ServiceError'
  | 'ValidationError'
  | 'NotFoundError'
  | 'UnauthorizedError'
  | 'ForbiddenError'
  | 'MethodNotAllowedError'
  | 'ConflictError'

export type ErrorToJson = {
  name: AppErrorName
  message: string
  action: string
  statusCode: number
}

export class BasicError extends Error {
  name: AppErrorName
  action: string
  statusCode: number

  constructor({
    name,
    message,
    action,
    statusCode,
    cause,
  }: {
    name: AppErrorName
    message: string
    action: string
    statusCode: number
    cause?: unknown
  }) {
    super(message, { cause })
    this.name = name
    this.action = action
    this.statusCode = statusCode
  }

  toJSON(): ErrorToJson {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

export class InternalServerError extends BasicError {
  constructor({
    cause,
    message,
    statusCode = 500,
  }: {
    cause?: unknown
    message?: string
    statusCode?: number
  } = {}) {
    super({
      name: 'InternalServerError',
      message: message ?? 'Ocorreu um erro inesperado.',
      action:
        'Tente novamente em instantes. Se o problema persistir, entre em contato com o suporte.',
      statusCode,
      cause,
    })
  }
}

export class ServiceError extends BasicError {
  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  }) {
    super({
      name: 'ServiceError',
      message: message || 'Serviço indisponível no momento.',
      action:
        action ||
        'Tente novamente mais tarde ou entre em contato com o suporte técnico.',
      statusCode: 503,
      cause,
    })
  }
}

export class ValidationError extends BasicError {
  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  } = {}) {
    super({
      name: 'ValidationError',
      message: message || 'Um erro de validação ocorreu.',
      action: action || 'Ajuste os dados enviados e tente novamente.',
      statusCode: 400,
      cause,
    })
  }
}

export class NotFoundError extends BasicError {
  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  } = {}) {
    super({
      name: 'NotFoundError',
      message: message || 'Não foi possível encontrar este recurso no sistema.',
      action:
        action ||
        'Verifique se os parâmetros enviados na consulta estão certos.',
      statusCode: 404,
      cause,
    })
  }
}

export class UnauthorizedError extends BasicError {
  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  } = {}) {
    super({
      name: 'UnauthorizedError',
      message: message || 'Usuário não autenticado.',
      action: action || 'Faça novamente o login para continuar.',
      statusCode: 401,
      cause,
    })
  }
}

export class ForbiddenError extends BasicError {
  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  } = {}) {
    super({
      name: 'ForbiddenError',
      message: message || 'Você não tem permissão para acessar este recurso.',
      action: action || 'Verifique se você tem as permissões necessárias.',
      statusCode: 403,
      cause,
    })
  }
}

export class MethodNotAllowedError extends BasicError {
  constructor({
    cause,
  }: {
    cause?: unknown
  } = {}) {
    super({
      name: 'MethodNotAllowedError',
      message: 'Método não permitido para este endpoint.',
      action: 'Verifique se o método HTTP enviado é válido para este endpoint.',
      statusCode: 405,
      cause,
    })
  }
}

export class ConflictError extends BasicError {
  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  } = {}) {
    super({
      name: 'ConflictError',
      message: message || 'O recurso já existe ou já foi processado.',
      action: action || 'Verifique os dados enviados e tente novamente.',
      statusCode: 409,
      cause,
    })
  }
}

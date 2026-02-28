export class InternalServerError extends Error {
  action: string
  statusCode: number

  constructor({
    message,
    cause,
    statusCode,
  }: {
    message?: string
    cause?: unknown
    statusCode?: number
  }) {
    super(message ?? 'Um erro interno inesperado aconteceu.', {
      cause,
    })
    this.name = 'InternalServerError'
    this.action = 'Entre em contato com o suporte.'
    this.statusCode = statusCode ?? 500
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

export class MethodNotAllowedError extends Error {
  action: string
  statusCode: number

  constructor({ cause }: { cause?: unknown }) {
    super('Método não permitido para este endpoint.', {
      cause,
    })
    this.name = 'MethodNotAllowedError'
    this.action =
      'Verifique se o método HTTP enviado é válido para este endpoint.'
    this.statusCode = 405
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

export class ServiceError extends Error {
  action: string
  statusCode: number

  constructor({ cause, message }: { cause?: unknown; message?: string }) {
    super(message ?? 'Serviço indisponível no momento.', {
      cause,
    })
    this.name = 'ServiceError'
    this.action = 'Verifique se o serviço está disponível e tente novamente.'
    this.statusCode = 503
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

export class ValidationError extends Error {
  action: string
  statusCode: number

  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  }) {
    super(message ?? 'Ocorreu um erro de validação.', {
      cause,
    })
    this.name = 'ValidationError'
    this.action = action ?? 'Ajuste os dados enviados e tente novamente.'
    this.statusCode = 400
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

export class NotFoundError extends Error {
  action: string
  statusCode: number

  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  }) {
    super(message ?? 'Não foi possível encontrar esse recurso no sistema.', {
      cause,
    })
    this.name = 'NotFoundError'
    this.action =
      action ??
      'Verifique se os parâmetros enviados na consulta estão corretos.'
    this.statusCode = 404
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

export class UnauthorizedError extends Error {
  action: string
  statusCode: number

  constructor({
    cause,
    message,
    action,
  }: {
    cause?: unknown
    message?: string
    action?: string
  }) {
    super(message ?? 'Usuário não autenticado.', {
      cause,
    })
    this.name = 'UnauthorizedError'
    this.action = action ?? 'Faça login novamente para continuar.'
    this.statusCode = 401
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      statusCode: this.statusCode,
    }
  }
}

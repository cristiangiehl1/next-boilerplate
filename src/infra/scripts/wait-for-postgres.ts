import { exec, type ExecException } from 'node:child_process'

function checkPostgres() {
  exec(
    'docker exec next-boirleplate_db pg_isready --host localhost',
    handleReturn
  )

  function handleReturn(error: ExecException | null, stdout: string) {
    if (stdout.search('accepting connections') === -1) {
      process.stdout.write('.')
      checkPostgres()
      return
    }

    if (error) {
      console.error('Erro ao verificar o Postgres:', error.message)
      checkPostgres()
      return
    }

    console.log('\n🟢 Postgres está pronto e aceitando conexões!\n')
  }
}

process.stdout.write('\n\n🔴 Aguardando Postgres aceitar conexões')
checkPostgres()

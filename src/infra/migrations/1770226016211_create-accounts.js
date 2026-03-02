export async function up(pgm) {
  pgm.createTable(
    'accounts',
    {
      id: 'id',

      provider: {
        type: 'text',
        notNull: true,
      },
      provider_account_id: {
        type: 'text',
        notNull: true,
      },

      access_token: {
        type: 'text',
      },
      refresh_token: {
        type: 'text',
      },
      access_token_expires_at: {
        type: 'timestamptz',
      },

      password: {
        type: 'varchar(60)',
      },

      user_id: {
        type: 'integer',
        notNull: true,
        references: 'users(id)',
        onDelete: 'cascade',
      },

      created_at: {
        type: 'timestamptz',
        default: pgm.func("timezone('utc', now())"),
        notNull: true,
      },
      updated_at: {
        type: 'timestamptz',
        default: pgm.func("timezone('utc', now())"),
        notNull: true,
      },
    },
    {
      ifNotExists: true,
      constraints: {
        unique: ['provider', 'provider_account_id'],
      },
    }
  )
}

export async function down(pgm) {
  pgm.dropTable('accounts', { ifExists: true })
}

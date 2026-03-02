export async function up(pgm) {
  pgm.createTable(
    'users',
    {
      id: 'id',
      name: {
        type: 'varchar(30)',
        notNull: true,
      },
      username: {
        type: 'varchar(30)',
        notNull: true,
        unique: true,
      },
      email: {
        type: 'varchar(254)',
        notNull: true,
        unique: true,
      },
      email_verification_token: {
        type: 'varchar(96)',
        notNull: true,
        unique: true,
      },
      email_verified: {
        type: 'boolean',
        notNull: true,
        default: false,
      },
      image: {
        type: 'text',
      },
      image_provider_id: {
        type: 'text',
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
    { ifNotExists: true }
  )
}

export async function down(pgm) {
  pgm.dropTable('users', { ifExists: true })
}

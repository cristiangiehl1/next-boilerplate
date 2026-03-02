export async function up(pgm) {
  pgm.createTable(
    'sessions',
    {
      id: 'id',
      user_id: {
        type: 'integer',
        notNull: true,
        references: 'users(id)',
        onDelete: 'cascade',
      },

      token: {
        type: 'varchar(96)',
        notNull: true,
        unique: true,
      },
      expires_at: {
        type: 'timestamptz',
        notNull: true,
      },

      ip_address: {
        type: 'varchar(45)',
        notNull: true,
      },

      user_agent: {
        type: 'text',
        notNull: true,
      },

      device_name: {
        type: 'varchar(150)',
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
  pgm.dropTable('sessions', { ifExists: true })
}

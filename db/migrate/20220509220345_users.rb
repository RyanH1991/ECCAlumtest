class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :personal_email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.string :emails, array: true
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :gender
      t.datetime :birthdate
      t.string :phone_number
      t.string :linkedin_url
      t.string :industry
      t.string :job_title
      t.string :job_title_role
      t.string :job_company_name
      t.string :job_company_industry
      t.string :facebook_url
      t.string :street_address
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :personal_email, unique: true
    add_index :users, :session_token, unique: true
  end
end

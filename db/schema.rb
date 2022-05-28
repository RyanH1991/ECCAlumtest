# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_27_205938) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "alumni", id: false, force: :cascade do |t|
    t.string "id"
    t.string "full_name"
    t.string "first_name"
    t.string "middle_initial"
    t.string "middle_name"
    t.string "last_name"
    t.string "gender"
    t.string "birth_year"
    t.string "birth_date"
    t.string "linkedin_url"
    t.string "linkedin_username"
    t.string "linkedin_id"
    t.string "facebook_url"
    t.string "facebook_username"
    t.string "facebook_id"
    t.string "twitter_url"
    t.string "twitter_username"
    t.string "github_url"
    t.string "github_username"
    t.string "work_email"
    t.string "mobile_phone"
    t.string "industry"
    t.string "job_title"
    t.string "job_title_role"
    t.string "job_title_sub_role"
    t.string "job_title_levels"
    t.string "job_company_id"
    t.string "job_company_name"
    t.string "job_company_website"
    t.string "job_company_size"
    t.string "job_company_founded"
    t.string "job_company_industry"
    t.string "job_company_linkedin_url"
    t.string "job_company_linkedin_id"
    t.string "job_company_facebook_url"
    t.string "job_company_twitter_url"
    t.string "job_company_location_name"
    t.string "job_company_location_locality"
    t.string "job_company_location_metro"
    t.string "job_company_location_region"
    t.string "job_company_location_geo"
    t.string "job_company_location_street_address"
    t.string "job_company_location_address_line_2"
    t.string "job_company_location_postal_code"
    t.string "job_company_location_country"
    t.string "job_company_location_continent"
    t.string "job_last_updated"
    t.string "job_start_date"
    t.string "job_summary"
    t.string "location_name"
    t.string "location_locality"
    t.string "location_metro"
    t.string "location_region"
    t.string "location_country"
    t.string "location_continent"
    t.string "location_street_address"
    t.string "location_address_line_2"
    t.string "location_postal_code"
    t.string "location_geo"
    t.string "location_last_updated"
    t.string "linkedin_connections"
    t.string "inferred_salary"
    t.string "inferred_years_experience"
    t.string "summary"
    t.string "phone_numbers"
    t.string "emails"
    t.string "interests"
    t.string "skills"
    t.string "location_names"
    t.string "regions"
    t.string "countries"
    t.string "street_addresses"
    t.string "experience"
    t.string "education"
    t.string "profiles"
    t.string "certifications"
    t.string "languages"
    t.string "version_status"
  end

  create_table "lightalumni", id: false, force: :cascade do |t|
    t.string "full_name"
    t.string "first_name"
    t.string "middle_initial"
    t.string "middle_name"
    t.string "last_name"
    t.string "linkedin_url"
    t.string "facebook_url"
    t.string "twitter_url"
    t.string "work_email"
    t.string "mobile_phone"
    t.string "inferred_salary"
    t.string "phone_numbers"
    t.string "emails"
    t.string "education"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "personal_email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "emails", array: true
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "gender"
    t.datetime "birthdate"
    t.string "phone_number"
    t.string "linkedin_url"
    t.string "industry"
    t.string "job_title"
    t.string "job_title_role"
    t.string "job_company_name"
    t.string "job_company_industry"
    t.string "facebook_url"
    t.string "street_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "inferred_salary"
    t.index ["personal_email"], name: "index_users_on_personal_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

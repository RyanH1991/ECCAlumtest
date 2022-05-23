@users.each do |user|
    json.set! user.id do
        json.extract! user,
                        :id,
                        :username,
                        :personal_email,
                        :session_token,
                        :password_digest,
                        :emails,
                        :first_name,
                        :middle_name,
                        :last_name,
                        :gender,
                        :birthdate,
                        :phone_numbers,
                        :linkedin_url,
                        :industry,
                        :job_title,
                        :job_title_role,
                        :job_company_name,
                        :job_company_industry,
                        :inferred_salary,
                        :facebook_url,
                        :street_address
    end
end
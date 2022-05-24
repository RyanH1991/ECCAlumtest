@users.each do |user|
    json.set! user.id do
        json.extract! user,
                        :id,
                        :personal_email,
                        :session_token,
                        :emails,
                        :first_name,
                        :last_name,
                        :phone_numbers,
                        :linkedin_url,
                        :facebook_url
    end
end
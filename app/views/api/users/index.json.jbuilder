@users.each do |user|
    json.set! user.id do
        json.extract! user,
                        :id,
                        :emails,
                        :first_name,
                        :last_name,
                        :phone_numbers,
                        :linkedin_url,
                        :facebook_url,
                        :industry
    end
end
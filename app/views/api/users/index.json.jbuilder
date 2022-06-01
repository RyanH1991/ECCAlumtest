@users.each do |user|
    json.set! user.id do
        json.extract! user,
                        :first_name,
                        :middle_name,
                        :middle_initial,
                        :last_name,
                        :phone_numbers,
                        :emails,
                        :linkedin_url,
                        :facebook_url,
                        :industry
    end
end
@admins.each do |admin|
    json.set! admin.id do
        json.extract! admin,
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
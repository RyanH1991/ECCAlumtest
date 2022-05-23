class AddPhoneNumbers < ActiveRecord::Migration[5.2]
  def change
    # I need to delete the phone_number column
    # and turn into the phone_numbers column
    # make it array true
    remove_column :users, :phone_number
    add_column :users, :phone_numbers, :string, array: true, default: []
  end
end

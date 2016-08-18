RailsAdmin.config do |config|

  ################  Global configuration  ################
  config.main_app_name = ['Skeleton']
  config.default_items_per_page = 20
  config.compact_show_view = false

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  ## == Cancan ==
  config.authorize_with :cancan

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show

    ###  User  ###
    config.model 'User' do
      # navigation_label 'Gerenciar usuários'
      # navigation_icon 'icon-user'
      list do
        field :id
        field :email
        field :updated_at
        field :admin
      end
      edit do
        field :email
        field :password
        field :password_confirmation
      end
      # show do
      #   field :email
      #   field :admin
      # end
    end

  end
end

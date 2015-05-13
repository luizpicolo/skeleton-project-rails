# Skeleton Project Rails
**Base to start your project**

It's based on Rails 4.2.1 and Ruby 2.2.1.

## How to use
**First step:** Clone the repository adding the name of your project

    git clone git@github.com:luizpicolo/skeleton-project-rails.git

**Second step:** Rename the files and change the database configuration

    cp config/database.example.yml config/database.yml &&
    cp config/application.example.yml config/application.yml &&
    cp config/secrets.example.yml config/secrets.yml

**Third step:** Within of your project, execute this command

    bundle install && rake db:create && rake db:migrate && rake db:seed

**Final step:** Rename your project

    rails g rename:app_to NEW_NAME

# All Gems  

## Application Gems
 - alert_message
 - bootstrap-sass
 - bootstrap-wysihtml5-rails-font-awesome
 - carrierwave
 - cancancan
 - coffee-rails
 - devise
 - devise-bootstrap-views
 - figaro
 - jbuilder
 - jquery-rails
 - jquery-turbolinks
 - mini_magick
 - modernizr-rails
 - rails-i18n
 - rails-env
 - rails_admin
 - randumb
 - sass-rails
 - turbolinks
 - uglifier

## Development and test Gems

 - better_errors
 - binding_of_caller
 - capybara
 - database_rewinder
 - email_spec
 - factory_girl_rails
 - faker
 - mina
 - mysql2
 - rspec-rails
 - selenium-webdriver
 - shoulda-matchers
 - spring
 - rename
 - metric_fu
 - simplecov
 - rubycritic
 - rubocop

## Production and staging Gems

 - passenger
 - pg
 - therubyracer
 - turnout  

______
Create with <3 by Luiz Picolos  

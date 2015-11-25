# Skeleton Project Rails
**Base to start your project**

**This is work in progress**

It's based on Rails 4.2.4 and Ruby 2.2.1.

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
 - bourbon
 - bootstrap-wysihtml5-rails
 - bootstrap-wysihtml5-rails-font-awesome
 - carrierwave
 - carrierwave-ftp
 - cancancan
 - coffee-rails
 - devise
 - figaro
 - htmlcompressor
 - jbuilder
 - jquery-rails
 - jquery-turbolinks
 - mini_magick
 - modernizr-rails
 - neat
 - rails
 - rails-i18n
 - rails-env
 - rails_admin
 - randumb
 - sass-rails
 - turbolinks
 - uglifier
 - pg

## Development and test Gems

 - better_errors
 - binding_of_caller
 - capybara
 - database_rewinder
 - email_spec
 - factory_girl_rails
 - faker
 - mina
 - rspec-rails
 - selenium-webdriver
 - shoulda-matchers
 - spring
 - rename
 - simplecov

## Production and staging Gems

 - passenger
 - therubyracer
 - turnout  

______
Created with <3 by [Luiz Picolo](https://github.com/luizpicolo)
and [Gabriel Medina](https://github.com/gabrielmedina)

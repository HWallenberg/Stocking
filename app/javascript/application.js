// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap-sprockets
import "@hotwired/turbo-rails"
import "controllers"
// This is to set Turbo forms on or off or optin (it can be opted in in the form_tag or form_for) decided to leave it for now and opt out in actual form_tag.  see index.html.erb
// https://stackoverflow.com/questions/70921317/how-can-i-disable-hotwire-turbo-the-turbolinks-replacement-for-all-forms-in
//Turbo.setFormMode("optin")


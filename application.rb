require 'rubygems'
require 'sinatra'

helpers do
  def templates
    Dir.glob("templates/**").map do |template|
      name = File.basename(template, ".html")
      content = open(template).read
      "<textarea id='#{name}' class='x-hidden-display'>#{content}</textarea>"
    end.join("\n")
  end
end

get '/' do
  erb :index
end
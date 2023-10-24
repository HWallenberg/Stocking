class HomeController < ApplicationController
  def index
      StockQuote::Stock.new(api_key: "pk_c0bb0694ce7747179bbf309fb94a72f2")
      begin
        if params[:ticker] != nil and params[:ticker] != ""
          #byebug
          @stock = StockQuote::Stock.quote(params[:ticker])
        else
          @error = "Please provide a ticker code"
        end
      rescue StandardError => e
          @error = "There was a problem getting stock: #{e.message}"
      end
  end

  def about
  end
end

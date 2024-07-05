class AdminController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!

  def index
    dashboard_service = DashboardService.new
    @orders = dashboard_service.recent_orders
    @quick_stats = dashboard_service.quick_stats
    @revenue_by_day = dashboard_service.revenue_by_day
  end
end
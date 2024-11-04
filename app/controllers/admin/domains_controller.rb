# frozen_string_literal: true

class Admin::DomainsController < AdminController
  before_action :set_domain, only: %i[edit update destroy]

  def index
    @domains = Domain.all
  end

  def new
    @domain = Domain.new
  end

  def create
    @domain = Domain.new(domain_params)
    if @domain.save
      flash[:notice] = 'Successfully Created'
      redirect_to admin_domains_path
    else
      render :new
    end
  end

  def edit; end

  def update
    if @domain.update(domain_params)
      flash[:notice] = 'Successfully Updated'
      redirect_to admin_domains_path
    else
      render :edit
    end
  end

  def destroy
    @domain.destroy
    flash[:notice] = 'Successfully Deleted'
    redirect_to admin_domains_path
  end

  private

  def set_domain
    @domain = Domain.find(params[:id])
  end

  def domain_params
    params.require(:domain).permit(:name, :genre, :status)
  end
end
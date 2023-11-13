class Api::CommentsController < ApplicationController
    wrap_parameters include: Event.attribute_names + ['dateTime', 'authorId']
    # before_action :set_comment, only: [:update, :destroy]

    def index
        # @event = Event.find(params[:event_id])
        @comments = Comment.all(where(event_id: params[:event_id]))
        render :index
    end

    def create
        @comment = Comment.new(event_params)
        if @comment.save
            render :index
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        if @comment.update(comment_params)
            render :index
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment.destroy
        @comments = Comment.all(where(event_id: params[:event_id]))
        render :index

    private
    # def set_comment
    #     @comment = Comment.find(params[:id])
    # rescue
    #     render json: ['Comment not found'], status: :not_found
    # end

    def comment_params
        params.require(:comment).permit(:body, :author_id, :event_id)
    end

end

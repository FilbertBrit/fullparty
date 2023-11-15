class Api::CommentsController < ApplicationController
    wrap_parameters include: Comment.attribute_names + ['authorId', 'eventId', 'commentType']
    before_action :set_comment, only: [:update, :destroy]

    def index
        @comments = Comment.all
        # (where(event_id: params[:id]))
        render :index
    end
    

    def create
        # debugger
        @comment = Comment.new(comment_params)
        # put(@comment)
        if @comment.save
            render :show
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
    end

    private
    def set_comment
        @comment = Comment.find(params[:id])
    rescue
        render json: ['Comment not found'], status: :not_found
    end

    def comment_params
        params.require(:comment).permit(:body, :author_id, :event_id, :comment_type)
    end

end

import CommentModel from "../models/comment.model.js";
export const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;
    
    if (userId !== req.user.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment")
      );
    }

    const newComment = await CommentModel.create({
      content,
      postId,
      userId,
    });

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPostComments = async (req, res, next) => {
  const { postId } = req.params;

  try {
    const comments = await CommentModel.find({ postId }).sort({
      createdAt: -1,
    });

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const likeComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.commentId);
    
    if (!comment) {
      return next(errorHandler(404, "comment not found!"));
    }
    
    const userIndex = comment.likes.indexOf(req.user.id);
    
    if (userIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1);
    }

    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

export const editComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, 'Comment not found'));
    }
    if (comment.userId !== req.user.id && !req.user.isAdmin) {
      return next(
        errorHandler(403, 'You are not allowed to edit this comment')
      );
    }

    const editedComment = await CommentModel.findByIdAndUpdate(
      req.params.commentId,
      {
        content: req.body.content,
      },
      { new: true }
    );
    res.status(200).json(editedComment);
  } catch (error) {
    next(error);
  }

}
export const deleteComment = async (req, res, next) => {}
export const getcomments = async (req, res, next) => {}
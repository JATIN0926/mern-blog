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
    const comments = await CommentModel.find({ postId }).sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

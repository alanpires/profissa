export const feedbacksId = (array, id) => {
  console.log(array, id);
  let feedbackId = [];
  array.map((feedback) => {
    if (feedback.receiverId === parseInt(id)) {
      feedbackId.push(feedback);
    }
  });
  console.log(feedbackId);
  return feedbackId;
};

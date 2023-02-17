const PostSummaryItem = (post) => {
  return(`
     <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-1 me-auto">
        <div class="text-secondary">${post.topic}</div>
        <div class="fw-bold">${post.userName} <i class="fas fa-check-circle"></i><span class="fw-normal text-secondary"> - ${post.time}</span></div>
        <div class="fw-bold">${post.title}</div>
          </div>
        <img class="align-self-center rounded ms-3" src=${post.image} height="90">
     </li>
   `);
}
export default PostSummaryItem;
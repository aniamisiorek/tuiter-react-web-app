const WhoToFollowListItem = (who) => {
  return(`
       <li class="list-group-item d-flex justify-content-between align-items-start">
          <img class="rounded-circle align-self-center" src=${who.avatarIcon} height="40">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
            @${who.handle}
          </div>
          <button class="btn btn-primary rounded-pill align-self-center">Follow</button>
        </li>
   `);
}
export default WhoToFollowListItem;
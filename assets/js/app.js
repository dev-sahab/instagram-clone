const ins_form = document.getElementById('create_ins_post');
const msg = document.getElementById('msg');
const all_post = document.getElementById('instagram_all_post');

ins_form.onsubmit = (event) =>{
    event.preventDefault();

    const ins_form_data = new FormData(event.target);
    const data = Object.fromEntries(ins_form_data.entries());
    const {names,paragraph,image,auth_image} = Object.fromEntries(ins_form_data.entries());

    if (!names || !image || !auth_image) {
        msg.innerHTML = setaleart('All fields are required','danger');
    } else {
        setLSdata('ins-post', data);
        // msg.innerHTML = setaleart('Data Stable','success');
        event.target.reset();
        getAllPost();
    }
}

/**
 * Get All post form localstroge
*/

const getAllPost = () =>{
    const post = readLSdata('ins-post');
    let list = '';

    // check post validation in localstroge...
    if ( !post || post.length == 0 ) {
        list = `
            <div class="ins_post my-3">
                <div class="card stroy_member ins_post_content">
                    <div class="card-header">
                        <p class="text-center mb-0">😢😢😢No post found😢😢😢</p>
                    </div>
                </div>
            </div>
        `;
    };

    if ( post || post.length > 0 ) {
        post.map((info,index) => {
            list += `
            <div class="ins_post my-3">
            <div class="card stroy_member ins_post_content">
              <div class="card-header">
                <div class="user_details">
                  <div class="user_content">
                    <img class="rounded-circle" src="${info.auth_image}" alt="">
                    <p class="mb-0">${info.names}</p>
                  </div>
                  <div class="edit_delete">
                    <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle" type="button" id="drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="drop">
                        <a class="dropdown-item" href="#">Edit</a>
                        <a class="dropdown-item delete_data" index="${index}" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="card-body"></div> -->
              <img class="w-100" src="${info.image}" alt="">
              <div class="card-footer post_cardfooter">
                <div class="like_comment_area">
                  <div class="like_comment">
                    <svg aria-label="Like" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                    <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                  </div>
                  <div class="right_share">
                    <svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                  </div>
                </div>
                <div class="share_text">
                  <p class="likes">13,979 likes</p>
                  <p class="autoname_andtext"><strong>${info.names}</strong> ${info.paragraph}</p>
                  <p class="comments">View all 208 comments</p>
                  <p class="timer">2 DAYS AGO</p>
                </div>
                <hr class="card_footer_hr">
                <div class="footer_bottom">
                  <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                  <input type="text" name="comment" placeholder="Add a comments..." id="">
                  <button class="add_commentpost">Post</button>
                </div>
              </div>
            </div>
          </div>
            `;
        });
    };
    all_post.innerHTML = list;
}
getAllPost();

/**
 * delete data....
*/

all_post.onclick = (e) =>{
    e.preventDefault();

    if (e.target.classList.contains('delete_data')) {
        let confirmations = confirm('Are you want to delete this data...');
        if (confirmations) {
            // get current ls data..from localstroge...
            const for_delete = readLSdata('ins-post');
            // Get Index...
            const index = e.target.getAttribute('index');

            // Delete exet data...
            for_delete.splice(index, 1);

            // Update ls data...
            updateLSdata('ins-post', for_delete);
            getAllPost();
        }
    }
};
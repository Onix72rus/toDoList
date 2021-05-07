import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({ posts, onDelete, onTogleImportant, onTogleLike }) => {
   const element = posts.map((item) => {
      const { id, ...itemProps } = item;
      return (
         <li key={id} className="list-group-item">
            <PostListItem
               {...itemProps}
               onDelete={() => {
                  onDelete(id);
               }}
               onTogleImportant={() => onTogleImportant(id)}
               onTogleLike={() => onTogleLike(id)}
            />
         </li>
      );
   });

   return <ul className="app-list list-group">{element}</ul>;
};

export default PostList;

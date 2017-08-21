import React from 'react';

const PageContainer = () => {
  return{
    <div class="container pageContainer">
      <Home />
      <DisplaySecondaryMenu />
      <Search />
      <ThreadsListLeft />
      <DisplayContentRight />
      <Footer />
    </div>
  }
}

export default PageContainer;

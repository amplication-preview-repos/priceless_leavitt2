import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ReactionList } from "./reaction/ReactionList";
import { ReactionCreate } from "./reaction/ReactionCreate";
import { ReactionEdit } from "./reaction/ReactionEdit";
import { ReactionShow } from "./reaction/ReactionShow";
import { HootList } from "./hoot/HootList";
import { HootCreate } from "./hoot/HootCreate";
import { HootEdit } from "./hoot/HootEdit";
import { HootShow } from "./hoot/HootShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { FollowList } from "./follow/FollowList";
import { FollowCreate } from "./follow/FollowCreate";
import { FollowEdit } from "./follow/FollowEdit";
import { FollowShow } from "./follow/FollowShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"OwlsSocialNetwork"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Reaction"
          list={ReactionList}
          edit={ReactionEdit}
          create={ReactionCreate}
          show={ReactionShow}
        />
        <Resource
          name="Hoot"
          list={HootList}
          edit={HootEdit}
          create={HootCreate}
          show={HootShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Follow"
          list={FollowList}
          edit={FollowEdit}
          create={FollowCreate}
          show={FollowShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

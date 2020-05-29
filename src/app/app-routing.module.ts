import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-boardgames-collection',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'boardgames-library',
    loadChildren: () => import('./boardgames-library/boardgames-library.module').then( m => m.BoardgamesLibraryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-boardgames-collection',
    loadChildren: () => import('./my-boardgames-collection/my-boardgames-collection.module').then( m => m.MyBoardgamesCollectionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-games',
    loadChildren: () => import('./my-games/my-games.module').then( m => m.MyGamesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-friends',
    loadChildren: () => import('./my-friends/my-friends.module').then( m => m.MyFriendsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modal-boardgame-info',
    loadChildren: () => import('./modal-boardgame-info/modal-boardgame-info.module').then( m => m.ModalBoardgameInfoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

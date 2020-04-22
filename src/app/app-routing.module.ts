import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boardgames-library',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'boardgames-library',
    loadChildren: () => import('./boardgames-library/boardgames-library.module').then( m => m.BoardgamesLibraryPageModule)
  },
  {
    path: 'my-boardgames-collection',
    loadChildren: () => import('./my-boardgames-collection/my-boardgames-collection.module').then( m => m.MyBoardgamesCollectionPageModule)
  },
  {
    path: 'my-games',
    loadChildren: () => import('./my-games/my-games.module').then( m => m.MyGamesPageModule)
  },
  {
    path: 'my-friends',
    loadChildren: () => import('./my-friends/my-friends.module').then( m => m.MyFriendsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

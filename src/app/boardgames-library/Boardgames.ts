
export class Boardgames {
    games: Array<Game>;
    constructor(){
        this.games = new Array<Game>();
    }
}

export class Game {
    name: string;
    description: string;
    thumb_url:string;
    year_published: number;
    min_players:number;
    max_players:number;
    min_playtime:number;
    max_playtime:number;
    images: Images;
    average_user_rating:number;
    rules_url:string;
    constructor(){
        this.images = new Images();
    }
}

export class Images {
    thumb: string;
    small: string;
    medium: string;
    large: string;
    original: string;
}


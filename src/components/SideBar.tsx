import {useState} from 'react';
import {Button} from './Button';
import '../styles/sidebar.scss';
interface Genere {
    id:number;
    name:'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title:string;
}

interface SideBarProps {
  genres : Genere[];
  readonly  handleClickButtonSideBar: (arg0: number) =>  void ;
}

export function SideBar(props:SideBarProps) {
  
  const {genres}  = props;
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButtonSideBar(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>

  )
}
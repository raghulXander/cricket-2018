// // Gallery 

// import React, { Component } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app



// class Gallery extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//             photoIndex: 0,
//             isOpen: false,
//         };
//     }

//     render() {
//         const { photoIndex, isOpen } = this.state;
    
//         return (
//             <div>
//                 <button type="button" onClick={() => this.setState({ isOpen: true })}>
//                     View Gallery
//                 </button>
//                 {isOpen && (
//                     <Lightbox
//                         mainSrc={images[photoIndex]}
//                         nextSrc={images[(photoIndex + 1) % images.length]}
//                         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//                         onCloseRequest={() => this.setState({ isOpen: false })}
//                         onMovePrevRequest={() =>
//                         this.setState({
//                             photoIndex: (photoIndex + images.length - 1) % images.length,
//                         })
//                         }
//                         onMoveNextRequest={() =>
//                         this.setState({
//                             photoIndex: (photoIndex + 1) % images.length,
//                         })
//                         }
//                     />
//                 )}
//             </div>
//         );
//     }
// }

// export default Gallery;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Gallery1 from '../assets/gallery/gallery1.jpg';
import Gallery2 from '../assets/gallery/gallery2.jpg';
import Gallery3 from '../assets/gallery/gallery3.jpg';
import Gallery4 from '../assets/gallery/gallery4.jpg';

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#009270'
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [
    {
        image: Gallery1,
        title: 'Vijay 100 caps off India\'s tour game',
        description: `The game was brought to a drawn conclusion at the fall of Vijay's wicket. Indian team seats in a good position`
    },
    {
        image: Gallery2,
        title: 'Hope Mithali stops black mailing and pressurising coaches: Powar',
        description: `India Women's team head coach has accused the senior player of causing division in the team during the recently-concluded World T20 in the Caribbean`
    },
    {
        image: Gallery3,
        title: 'Fakhar Zaman doubtful for South Africa Tests',
        description: `The left-hander is said to have picked up the injury while fielding in the second T20I against Australia`
    },
    {
        image: Gallery4,
        title: 'Sri Lanka vs England, 3rd Test, Day 4',
        description: `England beat Sri Lanka by 42 runs after Tea on fourth day to win the third Test, and hence the series 3-0. But the achievement wasn't without a couple of hiccups on a chastening day for the visitors.`
    },
];

class Album extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { classes } = this.props;
        const { photoIndex, isOpen } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <main>
                    <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Gallery and News
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            For over 25 years, The Cricket Gallery has served as a conduit between animator & viewer; bridging the gap for fans of cartoons, to the cartoon world itself. We take pride in providing the highest quality, genuine, studio certified, animation artwork to our community. We're happy you've joined us.
                            Welcome to cricket World
                        </Typography>
                        <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                            <Button variant="outlined" color="primary" onClick={() => this.setState({ isOpen: true })}>
                                Gallery
                            </Button>
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map((card, idx) => (
                        <Grid item key={idx} sm={6} md={4} lg={3}>
                            <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.image}
                                title={card.title}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {card.title}
                                </Typography>
                                <Typography>
                                {card.description}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                    </div>
                </main>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                    Cricket is a most precarious profession; it is called a team game but, in fact, no one is so lonely as a batsman facing a bowler supported by ten fieldsmen and observed by two umpires to ensure that his error does not go unpunished.
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        John Arlott, An Eye for Cricket
                    </Typography>
                </footer>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
            </React.Fragment>
        );
    }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
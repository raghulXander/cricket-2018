//Schedule

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const MatchTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTtop: '50px',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function createData(team, total, won, lost, points, runrate) {
  return { team, total, won, lost, points, runrate };
}

const rows = [
  createData('Sunrisers Hyderabad', 14, 9, 5, 18, 0),
  createData('Chennai Super Kings', 14, 9, 5, 18, 0),
  createData('Kolkata Knight Riders', 14, 8, 6, 16, 0),
  createData('Rajasthan Royals', 14, 7, 7, 14, 0),
  createData('Mumbai Indians', 14, 6, 8, 12, 0),
  createData('Royal Challengers Bangalore', 14, 6, 8, 12, 0),
  createData('Kings XI Punjab', 14, 6, 8, 12, 0),
  createData('Delhi Daredevils', 14, 5, 9, 10, 0),
];

class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h3" component="h3">
                        Indian Premier League, 2018
                    </Typography>
                    <Typography component="p">
                        60 T20s . Apr 07-May 27 <br/><br/><br/>
                        The 2018 season of the Indian Premier League, also known as IPL 11, was the eleventh season of the IPL, a professional Twenty20 cricket league established by the BCCI in 2007
                    </Typography>
                    <Paper className={classes.tableRoot}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <MatchTableCell>Teams</MatchTableCell>
                                    <MatchTableCell numeric>Total</MatchTableCell>
                                    <MatchTableCell numeric>Won</MatchTableCell>
                                    <MatchTableCell numeric>Lost</MatchTableCell>
                                    <MatchTableCell numeric>Points</MatchTableCell>
                                    <MatchTableCell numeric>Run rate</MatchTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => {
                                    return (
                                        <TableRow className={classes.row} key={row.team}>
                                            <MatchTableCell component="th" scope="row">
                                                {row.team}
                                            </MatchTableCell>
                                            <MatchTableCell numeric>{row.total}</MatchTableCell>
                                            <MatchTableCell numeric>{row.won}</MatchTableCell>
                                            <MatchTableCell numeric>{row.lost}</MatchTableCell>
                                            <MatchTableCell numeric>{row.points}</MatchTableCell>
                                            <MatchTableCell numeric>{row.runrate}</MatchTableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Paper>
            </div>
        );
    }
}


Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
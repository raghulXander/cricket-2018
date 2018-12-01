// Summary Table 

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class SummaryTable extends Component {
    render() {
        const {data, classes} =  this.props;
        console.log(data,"DFDFD")
        if (data) {
            return (
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        {/* <TableHead>
                            <TableRow>
                                <TableCell>Content</TableCell>
                                <TableCell>Data (Stats)</TableCell>
                            </TableRow>
                        </TableHead> */}
                        <TableBody>
                            <TableRow >
                                <TableCell >
                                    <div className='batsman-wrap'>
                                        <div className='batsman'>
                                            {data.player1_name} ---- {`${data.player1_runs} (${data.player1_balls})`}
                                        </div>
                                        <div className='batsman'>
                                            {data.player2_name} ---- {`${data.player2_runs} (${data.player2_balls})`}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell >
                                    <div className='bowler-name'>{data.bowler_name}</div>
                                    <div className='bowler'>
                                        {`${data.overs} - ${data.maiden} - ${data.runs} - ${data.wickets}`}
                                    </div>
                                </TableCell>
                                <TableCell >
                                    <div className='score-wrap'>
                                        {data.total_runs} / {data.total_wickets}
                                    </div>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
                </Paper>
            )
        }

    }
}


SummaryTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryTable);

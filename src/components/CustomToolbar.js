import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';


class CustomToolbar extends Toolbar {
    navigate = action => {
        this.props.onNavigate(action)
    }
    render() {
        return (
            <div>
                <div className="rbc-toolbar">
                    <span className="rbc-btn-group">
                        <button type="button" onClick={this.navigate.bind(null, navigate.PREVIOUS)}>Prev</button>
                    </span>

                    <span className="rbc-toolbar-label">{this.props.label}</span>
                    <span className="rbc-btn-group">
                    </span>
                    <span className="rbc-btn-group">
                        <button type="button" onClick={() => this.navigate('TODAY')} >Today</button>
                    </span>
                    <span className="rbc-btn-group">
                        <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>Next</button>
                    </span>
                </div>
                <div>
                    <div className="rbc-toolbar">
                        <span className="rbc-btn-group">
                            <button style={{ backgroundColor: '#50ad31', color: '#ffffff', cursor: 'not-allowed', pointerEvents: 'all'}}>Completed</button>
                        </span>
                        <span className="rbc-btn-group">
                            <button style={{ backgroundColor: '#e002fb', color: '#ffffff'}}>Pending</button>
                        </span>
                        <span className="rbc-btn-group">
                            <button style={{ backgroundColor: '#e3f10a'}}>In Progress</button>
                        </span>
                        <span className="rbc-btn-group">
                            <button style={{ backgroundColor: '#93938b', color: '#ffffff'}}>Not Started Yet</button>
                        </span>
                        <span className="rbc-btn-group">
                            <button style={{ backgroundColor: '#fb0202', color: '#ffffff'}}>Not Completed</button>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}
export let navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
}

export default CustomToolbar;
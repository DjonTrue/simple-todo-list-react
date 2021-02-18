import React, { Component } from "react";

import "./item-status-filter.css";

const filterButtons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
];

export default class ItemStatusFilter extends Component {
        

    render() {

        const {filter, onFilterChange} = this.props

        const buttons = filterButtons.map(({ name, label }) => {
            const isActive = filter === name;
            const classButton = isActive ? "btn-info" : "btn-outline-secondary"
            return (
                <button
                    type="button"
                    className={`btn ${classButton}`}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

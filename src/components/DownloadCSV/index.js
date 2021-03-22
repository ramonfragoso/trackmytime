import React from 'react';
import { Button, Icon } from './style';

const DownloadCsv = (props) => {
    const { data } = props

    const exportCsv = () => {
        const content = []

        Object.keys(data.data).map(day => {
            Object.keys(data.data[day]).map(website => {
                data.data[day][website].map(access => {
                    const seconds = ((new Date(access['finish']) - new Date(access['start'])) / 60)
                    const row = [day, website, seconds]
                    content.push(row)
                    return access
                })
                return website
            })
            return day
        })  
        return content;
    }

    const csvreport = {
        data: exportCsv(),
        headers: ["DIA", "WEBSITE", "TEMPO (SEGUNDOS)"],
        filename: 'TrackedTime.csv'
    }

    return (
        <Button {...csvreport}>Exportar CSV <Icon fill='white'/></Button>
    )
}

export default DownloadCsv;
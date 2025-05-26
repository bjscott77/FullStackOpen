const PhoneRecordDisplay = ({filteredPersons}) => {
    return <div>
        {filteredPersons.map(p => <div key={p.number}>{p.name} {p.number}</div>)}
      </div>    
}

export default PhoneRecordDisplay
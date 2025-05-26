const PhoneRecordFilter = ({search, handleSearchChange}) => {
    return <div>
        filter shown with: <input value={search} onChange={handleSearchChange} placeholder="Search by name or number..." />
      </div>
}

export default PhoneRecordFilter
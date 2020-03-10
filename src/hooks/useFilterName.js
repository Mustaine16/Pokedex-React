
  /*Hook filtrado por Nombre */

  const useFilterByName = () => {
    const [queryName, setQueryName] = useState("");
    const [listByName, setListByName] = useState([]);

    function handleByName(event) {
      setQueryName(event.target.value.toLowerCase());
    }

    const filterByName = React.useMemo(() => {
      return localData.filter(e => e.name.startsWith(queryName));
    }, [queryName]);

    useEffect(() => {
      setListByName(filterByName);
    }, [filterByName]);

    return [queryName, listByName, handleByName];
  };
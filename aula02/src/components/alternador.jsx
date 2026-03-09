// export: a função fica disponível para qualquer um que importar
// default: função padrão a ser exportada

// estado e setEstado: propriedades do componente
export default function Alternador({estado, setEstado})
{    
    return(
        <div>
            <input type="checkbox" checked={estado} onChange={() => setEstado(!estado)}/>
            <label>Alternar</label>
        </div>
    )
}
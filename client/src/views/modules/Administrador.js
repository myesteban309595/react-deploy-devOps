import { Fragment, useState} from "react";

import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import OutlinedInput from '@mui/material/OutlinedInput';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// import Checkbox from '@mui/material/Checkbox';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import LastPageIcon from '@mui/icons-material/LastPage';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

// import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Swal from 'sweetalert2';
import Tooltip from '@mui/material/Tooltip';


import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


function createData(name, calories, fat, d1, d2, d3 ) {
  return { name, calories, fat,d1,d2,d3 };
}

const rows = [
  createData("554432", "Harina pan", 3.7, 5,7, "11/02/2023"),
  createData('557788', "Aceite", 25.0, 5, 7, "11/02/2023"),
  createData('112233', "Leche", 16.0, 5, 7, "11/02/2023"),
  createData('458978', "Atun", 6.0, 5, 7, "11/02/2023"),
  createData('123245', 356, 16.0, 5, 7, "11/02/2023"),
  createData('123456', 408, 3.2, 5, 7, "11/02/2023"),
  createData('789856', 237, 9.0, 5, 7, "11/02/2023"),
  createData('467889', 375, 0.0, 5, 7, "11/02/2023"),
  createData('123245', 518, 26.0, 5, 7, "11/02/2023"),
  createData('L12324', 392, 0.2, 5, 7, "11/02/2023"),
  createData('126354', 318, 0, 5, 7, "11/02/2023"),
  createData('789854', 360, 19.0, 5, 7, "11/02/2023"),
  createData('123145', 437, 18.0, 5, 7, "11/02/2023"),
  createData('123145', 437, 18.0, 5, 7, "11/02/2023"),
  createData('123145', 437, 18.0, 5, 7, "11/02/2023"),
  createData('123145', 437, 18.0, 5, 7, "11/02/2023"),
  createData('123145', 437, 18.0, 5, 7, "11/02/2023"),
].sort();

//& iconos del speed dial

// const actions = [
//   { icon: <PlaylistAddIcon/>, name: 'Agregar' },
//   { icon: <PictureAsPdfIcon />, name: 'Pdf' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

const Administrador = ()=> {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [updateProduct, setupdateProduct] = useState(false)

  // fin speedDial

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const addNew = ()=> {
    rows.unshift(createData("", "", null, null, null));
    console.log("hola dentro de add new");
  }

  const update = ()=> {
    setupdateProduct(!updateProduct);
  }

  const saveUpdate = ()=> {
    Swal.fire({
      title: 'Success',
      text: "Guardado exitosamente",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Genial',
    })
  }

  const deleteProduct = ()=> {
    Swal.fire({
      title: 'Eliminar',
      text: "Quieres Eliminar este item ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Su Item se ha eliminado correctamente.'
        )
      }
    })  
  }

return (
 <Fragment>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500}} aria-label="custom pagination table" stickyHeader >
        <TableHead >
          <TableRow >
            <StyledTableCell align="left">Código</StyledTableCell>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="left">Cantidad</StyledTableCell>
            <StyledTableCell align="left">Unidades</StyledTableCell>
            <StyledTableCell align="left">Precio&nbsp;($)</StyledTableCell>
            <StyledTableCell align="left">Fecha vencimiento</StyledTableCell>
            <StyledTableCell align="center">Accion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            //& columnas y filas tabla
            <TableRow key={row.name} style={{ height: "20px" }}>
              <TableCell style={{ width: 130, height: "20px" }}  component="th" scope="row">
                 {updateProduct ?  
                   <OutlinedInput value={row.name} style={{ 
                     width: "90%", 
                     height: "30px",
                     borderRadius: "3px",
                     }}>
                    </OutlinedInput>
                    :
                    <div>
                      {row.name}
                    </div>
                  }
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {updateProduct ?  
                   <OutlinedInput value={row.calories} style={{ 
                     width: "95%", 
                     height: "30px",
                     borderRadius: "3px",
                     }}>
                    </OutlinedInput>
                    :
                    <div>
                      {row.calories}
                    </div>
                  }
              </TableCell>
              <TableCell style={{ width: 80 }} align="left">
              {updateProduct ?  
                   <OutlinedInput  
                   value={row.fat} 
                   style={{ 
                     width: "90%", 
                     height: "30px",
                     borderRadius: "3px",
                     }}>
                    </OutlinedInput>
                    :
                    <div>
                      {row.fat}
                    </div>
                  }
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                 {updateProduct ?  
                   <OutlinedInput value={row.d1} style={{ 
                     width: "95%", 
                     height: "30px",
                     borderRadius: "3px",
                     }}>
                    </OutlinedInput>
                    :
                    <div>
                      {row.d1}
                    </div>
                  }
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
              {updateProduct ?  
                   <OutlinedInput value={row.d2} style={{ 
                     width: "100%", 
                     height: "30px",
                     borderRadius: "3px",
                     }}>
                    </OutlinedInput>
                    :
                    <div>
                      {row.d2}
                    </div>
                  }
              </TableCell>
              <TableCell style={{ width: 180 }} align="left">
              {updateProduct ?  
                   <input type="date" style={{   
                     width: "100%", 
                     height: "30px",
                     borderRadius: "3px",
                     }}>
                    </input>
                    :
                    <div>
                      {row.d3}
                    </div>
                  }
              </TableCell>
              {/* Editar fila */}
              <Grid style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                  <TableCell style={{ width: 80 }} align="left">
                { updateProduct ? 
                    <Tooltip title="Guardar" arrow>
                     <Button onClick={saveUpdate}>
                       <SaveIcon />
                     </Button>
                    </Tooltip>
                      :
                    <Tooltip title="Eliminar" arrow>
                     <Button onClick={deleteProduct}>
                       <DeleteIcon  sx={{color:"red"}} />
                     </Button>
                    </Tooltip>
                   }
                  </TableCell>
                  <Tooltip title="Editar" arrow followCursor>
                    <Button onClick={update}>
                      <EditIcon  sx={{color:"green"}}/>
                    </Button>
                  </Tooltip>
              </Grid>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow sx={{width:"100%"}}>
            <TablePagination
              rowsPerPageOptions={[5, 8, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              sx={{width:"100%"}}
              SelectProps={{  
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>

    {/* speedDial */}
    <Box sx={{ height: 100, transform: 'translateZ(10px)', flexGrow: 1 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16, top: 0 }}
        icon={<SpeedDialIcon />}
        direction={"left"}
      >
          <SpeedDialAction
            key={"action.name"}
            icon={<PlaylistAddIcon/>}
            tooltipTitle={"Agregar"}
            onClick={addNew}
          />
          <SpeedDialAction
            key={"action.name"}
            icon={<PictureAsPdfIcon />}
            tooltipTitle={"PDF"}
            onClick
          />
          <SpeedDialAction
            key={"action.name"}
            icon={<PrintIcon />}
            tooltipTitle={"Imprimir"}
            onClick
          />
          <SpeedDialAction
            key={"action.name"}
            icon={ <FileDownloadIcon />}
            tooltipTitle={"Descargar"}
            onClick
          />

      </StyledSpeedDial>
    </Box>
 </Fragment>
);

}

export default Administrador
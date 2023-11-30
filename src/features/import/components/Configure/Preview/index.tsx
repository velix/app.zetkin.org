import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import MappedPreview from './MappedPreview';
import messageIds from 'features/import/l10n/messageIds';
import { Msg } from 'core/i18n';
import usePersonPreview from 'features/import/hooks/usePersonPreview';
import useSheets from 'features/import/hooks/useSheets';
import {
  Column,
  ColumnKind,
  Sheet,
  TagColumn,
} from 'features/import/utils/types';
import FieldsPreview from './FieldsPreview';

const Preview = () => {
  const theme = useTheme();
  const { sheets, selectedSheetIndex, firstRowIsHeaders } = useSheets();
  const [personIndex, setPersonIndex] = useState(0);
  const currentSheet: Sheet = sheets[selectedSheetIndex];
  const { fields } = usePersonPreview(currentSheet, personIndex);

  const emptyPreview = currentSheet.columns.every(
    (item) => item.selected === false
  );

  useEffect(() => {
    setPersonIndex(0);
  }, [selectedSheetIndex]);

  return (
    <Box p={2}>
      <Box alignItems="center" display="flex" sx={{ mb: 1.5 }}>
        <Typography sx={{ mr: 2 }} variant="h5">
          <Msg id={messageIds.configuration.preview.title} />
        </Typography>
        <Button
          disabled={personIndex === 0}
          onClick={() =>
            setPersonIndex((prev) => (personIndex !== 0 ? prev - 1 : prev))
          }
          startIcon={<ArrowBackIos />}
        >
          <Msg id={messageIds.configuration.preview.previous} />
        </Button>
        <Button
          disabled={
            personIndex ===
            currentSheet.rows.length - (firstRowIsHeaders ? 2 : 1)
          }
          endIcon={<ArrowForwardIos />}
          onClick={() =>
            setPersonIndex((prev) =>
              personIndex < currentSheet.rows.length - 1 ? prev + 1 : prev
            )
          }
        >
          <Msg id={messageIds.configuration.preview.next} />
        </Button>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          border: '1px solid lightgrey',
          borderRadius: '5px',
          display: 'flex',
          height: '98px',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          {emptyPreview &&
            Array(currentSheet.columns.length)
              .fill(2)
              .map((marginSize, index) => {
                return (
                  <Box
                    key={`empty-preview-${index}`}
                    flexGrow={1}
                    sx={{
                      backgroundColor: theme.palette.transparentGrey.light,
                      height: '14px',
                      m: marginSize,
                    }}
                  />
                );
              })}
          {!emptyPreview &&
            currentSheet.columns.map((column, index) => {
              if (column.selected) {
                if (column.kind === ColumnKind.UNKNOWN) {
                  return (
                    <Box
                      flexGrow={1}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 'fit-content',
                        overflowX: 'auto',
                        padding: 2,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: theme.palette.transparentGrey.light,
                          height: '14px',
                          mb: 0.5,
                          minWidth: '150px',
                        }}
                      >
                        <Typography
                          fontSize="12px"
                          sx={{
                            color: theme.palette.grey['600'],
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                          }}
                          variant="body1"
                        ></Typography>
                      </Box>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        {
                          currentSheet.rows[
                            firstRowIsHeaders ? personIndex + 1 : personIndex
                          ].data[index]
                        }
                      </Box>
                    </Box>
                  );
                }
                if (column.kind === ColumnKind.FIELD) {
                  return (
                    <FieldsPreview fields={Object.entries(fields!)[index]} />
                  );
                }
              }
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Preview;

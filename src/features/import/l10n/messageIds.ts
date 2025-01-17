import { ReactElement } from 'react';
import { m, makeMessages } from 'core/i18n';

export default makeMessages('feat.import', {
  actionButtons: {
    back: m('Back'),
    close: m('Close'),
    configure: m('Configure'),
    done: m('Done'),
    import: m('Import'),
    restart: m('Restart'),
    validate: m('Validate'),
  },
  configuration: {
    configure: {
      ids: {
        configExplanation: m(
          'Importing with IDs allows Zetkin (now or in the future) to update existing people in the database instead of creating duplicates.'
        ),
        externalID: m('External ID'),
        externalIDExplanation: m(
          'The values in this column are IDs from our main member system (not Zetkin).'
        ),
        header: m('Configure IDs'),
        showOrganizationSelectButton: m('Map to...'),
        wrongIDFormatWarning: m(
          'The values in this column does not look like Zetkin IDs. A Zetkin ID only contains numbers. If some cells are empty or contain f.x. letters, it can not be used as Zetkin IDs.'
        ),
        zetkinID: m('Zetkin ID'),
        zetkinIDExplanation: m(
          'The values in this column are based on an export from Zetkin.'
        ),
      },
      orgs: {
        header: m('Map values to organizations'),
        organizations: m('Organization'),
        status: m('Status'),
      },
      tags: {
        empty: m('Empty'),
        header: m('Map values to tags'),
        numberOfRows: m<{ numRows: number }>(
          '{numRows, plural, =1 {1 row} other {# rows}}'
        ),
        tagsHeader: m('Tags'),
      },
    },
    hide: m('Hide'),
    mapping: {
      configButton: m('Configure'),
      defaultColumnHeader: m<{ columnIndex: number }>('Column {columnIndex}'),
      emptyStateMessage: m('Start by mapping file columns.'),
      fileHeader: m('File'),
      finishedMappingIds: m<{
        idField: 'ext_id' | 'id';
        numValues: number;
      }>(
        'Mapping {numValues, plural, =1 {1 value} other {# values}} to {idField, select, id {Zetkin ID} other {external ID}}'
      ),
      finishedMappingOrganizations: m<{
        numMappedTo: number;
        numPeople: number;
      }>(
        '{numPeople, plural, =1 {1 person} other {# people}} mapped to {numMappedTo, plural, =1 {1 organization} other {# organizations}}'
      ),
      finishedMappingTags: m<{
        numMappedTo: number;
        numRows: number;
      }>(
        'Mapping {numRows, plural, =1 {1 row} other {# rows}} to {numMappedTo, plural, =1 {1 tag} other {# tags}}'
      ),
      header: m('Mapping'),
      id: m('ID'),
      mapValuesButton: m('Map values'),
      messages: {
        manyValuesAndEmpty: m<{
          firstValue: string | number;
          numEmpty: number;
          numMoreValues: number;
          secondValue: string | number;
          thirdValue: string | number;
        }>(
          '{firstValue}, {secondValue}, {thirdValue}, {numMoreValues, plural, =1 {one other value} other {# other values}} and {numEmpty, plural, =1 {one empty row} other {# empty rows}}.'
        ),
        manyValuesNoEmpty: m<{
          firstValue: string | number;
          numMoreValues: number;
          secondValue: string | number;
          thirdValue: string | number;
        }>(
          '{firstValue}, {secondValue}, {thirdValue} and {numMoreValues, plural, =1 {one other value} other {# other values}}.'
        ),
        oneValueAndEmpty: m<{ firstValue: string | number; numEmpty: number }>(
          '{firstValue} and {numEmpty, plural, =1 {one empty row} other {# empty rows}}.'
        ),
        oneValueNoEmpty: m<{ firstValue: string | number }>('{firstValue}.'),
        onlyEmpty: m<{ numEmpty: number }>(
          '{numEmpty, plural, =1 {one empty row} other {# empty rows}}.'
        ),

        threeValuesAndEmpty: m<{
          firstValue: string | number;
          numEmpty: number;
          secondValue: string | number;
          thirdValue: string | number;
        }>(
          '{firstValue}, {secondValue}, {thirdValue} and {numEmpty, plural, =1 {one empty row} other {# empty rows}}.'
        ),
        threeValuesNoEmpty: m<{
          firstValue: string | number;
          secondValue: string | number;
          thirdValue: string | number;
        }>('{firstValue}, {secondValue} and {thirdValue}.'),
        twoValuesAndEmpty: m<{
          firstValue: string | number;
          numEmpty: number;
          secondValue: string | number;
        }>(
          '{firstValue}, {secondValue} and {numEmpty, plural, =1 {one empty row} other {# empty rows}}.'
        ),
        twoValuesNoEmpty: m<{
          firstValue: string | number;
          secondValue: string | number;
        }>('{firstValue} and {secondValue}.'),
      },
      needsConfig: m('You need to configure the IDs'),
      needsMapping: m('You need to map values'),
      organization: m('Organization'),
      selectZetkinField: m('Import as...'),
      tags: m('Tags'),
      zetkinHeader: m('Zetkin'),
    },
    preview: {
      columnHeader: {
        org: m('Organization'),
        tags: m('Tags'),
      },
      next: m('Next'),
      noOrg: m('No organization'),
      noTags: m('No tags'),
      noValue: m('No value'),
      previous: m('Previous'),
      title: m('Mapping preview'),
    },
    settings: {
      firstRowIsHeaders: m('First row is headers'),
      header: m('Settings'),
      sheetSelectHelpText: m(
        'Your file has multiple sheets, select which one to use.'
      ),
      sheetSelectLabel: m('Sheet'),
    },
    show: m('Show'),
    statusMessage: {
      done: m<{ numConfiguredPeople: number }>(
        'Configures import of {numConfiguredPeople, plural, =1 {1 person} other {# people}}'
      ),
      notDone: m('Your configuration is incomplete'),
    },
    title: m('Import people'),
  },
  impactSummary: {
    future: {
      created: m<{ numPeople: number; number: ReactElement }>(
        '{number} new {numPeople, plural, =1 {person} other {people}} will be created'
      ),
      defaultDesc: m<{ field: ReactElement; numPeople: ReactElement }>(
        '{numPeople} will receive changes to their {field}'
      ),
      organization: m('Organization'),
      orgs: m<{ numPeople: ReactElement; org: ReactElement }>(
        '{numPeople} will be added to an {org}'
      ),
      tags: m('Tags'),
      tagsDesc: m<{ numPeople: ReactElement; tags: ReactElement }>(
        '{numPeople} will have {tags} added'
      ),
      updated: m<{ numPeople: number; number: ReactElement }>(
        '{number} {numPeople, plural, =1 {person} other {people}} will be updated'
      ),
    },
    past: {
      created: m<{ numPeople: number; number: ReactElement }>(
        '{number} new {numPeople, plural, =1 {person} other {people}} were created'
      ),
      defaultDesc: m<{ field: ReactElement; numPeople: ReactElement }>(
        '{numPeople} recieved changes to their {field}'
      ),
      organization: m('Organization'),
      orgs: m<{ numPeople: ReactElement; org: ReactElement }>(
        '{numPeople} were added to an {org}'
      ),
      tags: m('Tags'),
      tagsDesc: m<{ numPeople: ReactElement; tags: ReactElement }>(
        '{numPeople} had {tags} added'
      ),
      updated: m<{ numPeople: number; number: ReactElement }>(
        '{number} {numPeople, plural, =1 {person} other {people}} were updated'
      ),
    },
    people: m<{ numPeople: number; number: ReactElement }>(
      '{number} {numPeople, plural, =1 {person} other {people}}'
    ),
  },
  importStatus: {
    completed: {
      desc: m('Your data has been imported to Zetkin'),
      title: m('Import completed'),
    },
    completedChanges: m('Completed changes'),
    error: {
      desc: m('No data was imported to Zetkin'),
      title: m('Import failed'),
    },
    loadingState: m('Importing'),
    scheduled: {
      desc: m(
        'You can safely close this dialog and we will send you an email when the import is done.'
      ),
      title: m(
        'This is a big import that will take a while to get into Zetkin!'
      ),
    },
  },
  preflight: {
    headers: {
      messages: m('Messages'),
      summary: m('Summary'),
    },
    messages: {
      common: {
        back: m('Go back'),
        checkbox: m('I understand and want to proceed anyway'),
        fewRows: m<{ commaRows: string; lastRow: number }>(
          'This problem exists on rows {commaRows} and {lastRow}.'
        ),
        manyRows: m<{ additionalRows: number; commaRows: string }>(
          'This problem exists on rows {commaRows} and {additionalRows} additional rows.'
        ),
        singleRow: m<{ row: number }>('This problem exists on row {row}.'),
      },
      invalidFormat: {
        title: m<{ field: string }>('Wrong format for field: {field}'),
      },
      majorChange: {
        description: m('Make sure you have configured the columns correctly'),
        title: m<{ field: string }>(
          "This import will overwrite lots of people's {field}"
        ),
      },
      missingIdAndName: {
        description: m(
          'Every row needs to contain at least a full name, or an ID of a person that already exists in Zetkin.'
        ),
        title: m('Not all rows have identifiers'),
      },
      noImpact: {
        description: m(
          'This could be because the file contains no new data, or due to an unknown error.'
        ),
        title: m('This import would have no effect'),
      },
      ok: {
        description: m(
          'Make sure the summary looks good and click "Import" to perform the import.'
        ),
        title: m('No problems found!'),
      },
      unconfiguredId: {
        description: m(
          'This will result in duplicates in the database. If this is your first import, it is recommended to go back and choose an external ID that you can use going forward.'
        ),
        title: m('You have not chosen an ID column'),
      },
      unconfiguredIdAndName: {
        description: m(
          'Every import must at least include either full names, or IDs of people that already exist in Zetkin.'
        ),
        title: m('You have not configured identifying columns'),
      },
      unknownError: {
        description: m(
          'Contact support if you need help understanding the problem.'
        ),
        title: m('An unknown error ocurred'),
      },
      unknownPerson: {
        description: m(
          `You configured a column as Zetkin IDs, but the column contains IDs that don't exist. Did you mean to use External ID, or could some people have been deleted since the file was created?`
        ),
        title: m('Trying to update records that do not exist'),
      },
    },
  },
  steps: {
    configure: m('Configure'),
    import: m('Import'),
    upload: m('Upload'),
    validate: m('Validate'),
  },
  uploadDialog: {
    dialogButtons: {
      configure: m('Configure'),
      restart: m('Restart'),
    },
    instructions: m<{ link: ReactElement }>('{link} or drag and drop'),
    loading: m('Loading file...'),
    release: m('Release the file here'),
    selectClick: m('Click to upload'),
    types: m('CSV, XLS or XLSX'),
    unsupportedFile: m('Unsupported file format.'),
  },
  validation: {
    messages: m('Messages'),
    people: m<{ numPeople: number }>(
      '{numPeople, plural, =1 {person} other {people}}'
    ),
    statusMessages: {
      create: m<{ numCreated: number }>(
        'This import will create {numCreated, plural, =1 {1 person} other {# people}}.'
      ),
      createAndUpdate: m<{ numCreated: number; numUpdated: number }>(
        'This import will create {numCreated, plural, =1 {1 person} other {# people}} and update {numUpdated, plural, =1 {1 person} other {# people}}.'
      ),
      error: m('You have to fix the errors before you can import'),
      update: m<{ numUpdated: number }>(
        'This import will update {numUpdated, plural, =1 {1 person} other {# people}}.'
      ),
    },
  },
});

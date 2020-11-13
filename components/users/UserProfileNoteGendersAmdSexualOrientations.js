import React, { useMemo } from 'react';

import useApp from '../../hooks/useApp';

import UserProfileNoteList from './UserProfileNoteList';

const UserProfileNoteGendersAndSexualOrientations = ({ user, ...props }) => {
  const { genders, sexualOrientations } = useApp();

  const selectedGenders = useMemo(() => (
    genders.filter(({ id }) => user.genderIds.includes(id))
  ), [genders, user]);


  const selectedSexualOrientations = useMemo(() => (
    sexualOrientations.filter(({ id }) => user.sexualOrientationIds.includes(id))
  ), [sexualOrientations, user]);

  const value = useMemo(() => (
    [
      ...selectedGenders.map(({ label }) => label),
      ...selectedSexualOrientations.map(({ label }) => label)
    ]
  ), [selectedSexualOrientations]);

  return (
    <UserProfileNoteList
      value={value}
      iconName="person"
      {...props}
    />
  );
}

export default React.memo(UserProfileNoteGendersAndSexualOrientations);
